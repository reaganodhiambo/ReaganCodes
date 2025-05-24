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
    <main className="bg-dark-background min-h-screen py-16 px-4">
      <PageMeta title="Blogs" description="Read all blog posts." />
      <div className="container mx-auto">
        <div className="flex flex-col md:min-h-[30vh] md:p-8 md:items-center md:justify-center mb-12">
          <h1 className="text-4xl md:text-8xl font-semibold mb-4">
            blogs<span className='text-sky-blue'>/</span>
          </h1>
          <p className="text-xl mb-6 max-w-3xl md:text-center">
            Explore my thoughts, tutorials, and updates. Each post is crafted to share knowledge, insights, and personal experiences from my journey as a developer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && <div>Loading...</div>}
          {error && <div className="text-red-600">{error}</div>}
          {blogs.length === 0 && !loading && <div>No blogs found.</div>}
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-card rounded-lg overflow-hidden border border-gray-700 flex flex-col h-full shadow-md">
              {/* Blog Header (image) */}
              {blog.image_url ? (
                <div className="h-56 w-full flex items-center justify-center bg-dark-background overflow-hidden">
                  <img src={blog.image_url} alt={blog.title} className="h-full w-full object-center" />
                </div>
              ) : (
                <div className="h-48 flex items-center justify-center bg-gray-200 text-gray-500">No image</div>
              )}
              {/* Blog Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-sky-blue">{blog.title}</h3>
                <div className="mb-4 text-neutral-gray line-clamp-3">
                  <MarkdownRenderer content={blog.content} />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags && blog.tags.split(',').map((tag, i) => (
                    <span key={i} className="bg-dark-background text-xs px-2 py-1 rounded text-neutral-gray border border-gray-700">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button variant="outlined" to={`/blogs/${blog.slug}`}>Read More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={page === i + 1 ? 'filled' : 'outlined'}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Blog; 