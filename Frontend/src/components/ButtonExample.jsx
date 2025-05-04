import React from 'react';
import Button from './Button';

const ButtonExample = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Button Examples</h2>
      
      <div className="flex gap-4 flex-wrap">
        {/* Filled Variant (default) */}
        <Button>Default Button</Button>
        <Button variant="filled">Filled Button</Button>
        
        {/* Outlined Variant */}
        <Button variant="outlined">Outlined Button</Button>
        
        {/* Different Sizes */}
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
        
        {/* Link Buttons */}
        <Button to="/about">Router Link</Button>
        <Button href="https://example.com" target="_blank">External Link</Button>
        
        {/* Custom Styling */}
        <Button className="uppercase">Custom Class</Button>
        
        {/* Combination of Props */}
        <Button 
          variant="outlined" 
          size="large" 
          className="font-bold"
          onClick={() => alert('Button clicked!')}
        >
          Customized Button
        </Button>
      </div>
    </div>
  );
};

export default ButtonExample; 