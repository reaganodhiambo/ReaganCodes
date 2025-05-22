import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import api from '../utils/api';

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line
  }, [slug]);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await api.get(`blogs/${slug}/`);
      setBlog(res.data);
    } catch {
      setError('Failed to fetch blog');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center text-red-600 mt-8">{error}</div>;
  if (!blog) return null;

  // Format date
  const date = blog.created_at ? new Date(blog.created_at).toLocaleDateString() : '';

  return (
    <main className="bg-dark-background min-h-screen py-16 px-4">
      <PageMeta title={blog.title} description={blog.content.slice(0, 150)} />
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-sky-blue mb-4">
            {blog.title}
          </h1>
          {blog.image_url && (
            <div className="w-full aspect-video rounded-lg shadow mb-4 overflow-hidden">
              <img
                src={blog.image_url}
                alt={blog.title}
                className="w-full h-64 md:h-full object-cover object-center"
              />
            </div>
          )}
          <div className="flex justify-center gap-6 text-gray-500 text-sm mb-8">
            <span>{date}</span>
            <span>By {blog.author_name || 'Reagan Odhiambo'}</span>
          </div>
          <div className="text-lg leading-relaxed text-neutral-gray whitespace-pre-line mb-8">
            {blog.content}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags && blog.tags.split(',').map((tag, i) => (
              <span key={i} className="bg-dark-background text-xs px-2 py-1 rounded text-neutral-gray border border-gray-700">
                {tag.trim()}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-500 mb-2">Published: {blog.published ? 'Yes' : 'No'}</div>
          <Link to="/blog">
            <Button variant="outlined" className="mt-8">Back to Blog</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default BlogDetail; 