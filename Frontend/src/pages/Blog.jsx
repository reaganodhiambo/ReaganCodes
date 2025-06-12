import React, { useEffect, useState } from 'react';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import { fetchBlogs } from '../utils/api';
import MarkdownRenderer from '../components/MarkdownRenderer';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line
  }, [page]);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const params = { page };
      const data = await fetchBlogs(params);
      setBlogs(data.results || []);
      setCount(data.count || 0);
    } catch {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(count / 9);

  return (
    <main className="bg-dark-background">
      <PageMeta title="Blogs" description="Read all blog posts." />
      
      {/* Hero Section */}
      <section className="section-full bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="mb-8">
              blogs<span className='text-sky-blue'>/</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
              Explore my thoughts, tutorials, and updates. Each post is crafted to share knowledge, insights, and personal experiences from my journey as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {loading && (
              <div className="text-center py-16">
                <div className="text-2xl text-sky-blue">Loading...</div>
              </div>
            )}
            
            {error && (
              <div className="text-center py-16">
                <div className="text-red-500 text-xl">{error}</div>
              </div>
            )}
            
            {blogs.length === 0 && !loading && (
              <div className="text-center py-16">
                <div className="text-xl text-neutral-gray">No blogs found.</div>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog.id} className="card-elevated group flex flex-col h-full">
                  {/* Blog Header (image) */}
                  {blog.image_url ? (
                    <div className="h-56 w-full rounded-lg overflow-hidden mb-6">
                      <img 
                        src={blog.image_url} 
                        alt={blog.title} 
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  ) : (
                    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-sky-blue/20 to-dark-background rounded-lg mb-6">
                      <span className="text-neutral-gray text-lg">No image</span>
                    </div>
                  )}
                  
                  {/* Blog Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-sky-blue">{blog.title}</h3>
                    <div className="mb-6 text-neutral-gray line-clamp-3 flex-1">
                      <MarkdownRenderer content={blog.content.slice(0, 150) + '...'} />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blog.tags && blog.tags.split(',').map((tag, i) => (
                        <span key={i} className="bg-dark-background text-xs px-3 py-1 rounded-full text-neutral-gray border border-gray-700/50 font-medium">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Button variant="outlined" to={`/blogs/${blog.slug}`} size="small">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-16 gap-3">
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i + 1}
                    variant={page === i + 1 ? 'filled' : 'outlined'}
                    onClick={() => setPage(i + 1)}
                    size="small"
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;