'use client';

import React, { useState, useCallback } from 'react';

const RemoveBg = () => {
  const [inputImage, setInputImage] = useState<File | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = (file: File) => {
    if (file) {
      setInputImage(file);
      setOutputImage(null);
    }
  };

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    }
  }, []);

  const removeBackground = async () => {
    if (!inputImage) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', inputImage); // Change 'image' to 'file' to match API expectation

    try {
      const response = await fetch('https://bgremover-fastapi-2rkb.onrender.com//remove-background/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to remove background');
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setOutputImage(imageUrl);
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Failed to remove background. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearImages = () => {
    setInputImage(null);
    setOutputImage(null);
  };

  const downloadImage = () => {
    if (outputImage) {
      const link = document.createElement('a');
      link.href = outputImage;
      link.download = 'removed_background.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-black">Effortless Background Removal</h2>
        <p className="text-black text-center mb-8 max-w-2xl mx-auto">
          Simply upload your image, and our AI handles the rest. Whether you&apos;re editing photos for personal or professional use, this tool offers precision and speed, removing backgrounds in a matter of seconds. Plus, the entire project, including this service, was coded by AI, making it a true testament to the capabilities of artificial intelligence in software development.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-black">Input Image</h3>
            <div 
              className={`border-2 border-dashed ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-lg p-4 text-center h-64 flex items-center justify-center transition-colors duration-300 ease-in-out overflow-hidden`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              {inputImage ? (
                <img 
                  src={URL.createObjectURL(inputImage)} 
                  alt="Input" 
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <label className="cursor-pointer">
                  <span className="text-blue-500">Upload an image or drag and drop here</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={(e) => handleImageUpload(e.target.files?.[0] as File)} 
                    accept="image/*" 
                  />
                </label>
              )}
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              {inputImage && (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                  onClick={removeBackground}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Remove Background'}
                </button>
              )}
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={clearImages}
              >
                Clear
              </button>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-black">Output Image</h3>
            <div className="border-2 border-gray-300 rounded-lg p-4 text-center h-64 flex items-center justify-center overflow-hidden">
              {outputImage ? (
                <img 
                  src={outputImage} 
                  alt="Output" 
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <p className="text-black">Processed image will appear here</p>
              )}
            </div>
            {outputImage && (
              <div className="mt-4 flex justify-center">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={downloadImage}
                >
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoveBg;