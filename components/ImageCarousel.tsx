import React, { useState, useEffect, useRef } from 'react';

interface ImageCarouselProps {
    images: string[];
    projectTitle: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, projectTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const imageRef = useRef<HTMLImageElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Auto-rotate carousel
    useEffect(() => {
        if (images.length <= 1 || isZoomed) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length, isZoomed]);

    const goToNext = () => {
        if (isZoomed) return;
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setScale(1);
    };

    const goToPrevious = () => {
        if (isZoomed) return;
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setScale(1);
    };

    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (!isZoomed) {
            setIsZoomed(true);
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            setZoomPosition({ x: clickX, y: clickY });
            setScale(1.5); // Start zoomed in
        }
    };

    const handleZoomClose = () => {
        setIsZoomed(false);
        setScale(1);
        setZoomPosition({ x: 0, y: 0 });
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (isZoomed) {
            e.preventDefault();
            setScale((prev) => Math.min(Math.max(prev - e.deltaY * 0.001, 0.5), 3));
        }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (isZoomed) {
            if (e.key === 'Escape') {
                handleZoomClose();
            } else if (e.key === 'ArrowLeft') {
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
                setScale(1.5);
            } else if (e.key === 'ArrowRight') {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setScale(1.5);
            }
        } else {
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isZoomed, currentIndex]);

    if (images.length === 0) {
        return null;
    }

    return (
        <>
            <div 
                ref={carouselRef}
                className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden bg-black/20"
                onWheel={handleWheel}
            >
                {/* 3D Carousel Container */}
                <div className="relative w-full h-full perspective-1000">
                    {images.map((image, index) => {
                        const distance = Math.abs(index - currentIndex);
                        const offset = index - currentIndex;
                        const isActive = index === currentIndex;
                        
                        // Calculate 3D transform
                        const translateZ = isActive ? 0 : -100 * distance;
                        const translateX = offset * 100;
                        const rotateY = offset * 15;
                        const opacity = isActive ? 1 : 0.3;
                        const scale = isActive ? 1 : 0.8;

                        return (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                    isActive ? 'z-10' : 'z-0 pointer-events-none'
                                }`}
                                style={{
                                    transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                                    opacity: opacity,
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <img
                                    ref={isActive ? imageRef : null}
                                    src={image}
                                    alt={`${projectTitle} - Screenshot ${index + 1}`}
                                    className={`w-full h-full object-contain cursor-zoom-in transition-transform duration-300 ${
                                        isActive ? '' : 'pointer-events-none'
                                    }`}
                                    onClick={isActive ? handleImageClick : undefined}
                                    draggable={false}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && !isZoomed && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                            aria-label="Previous image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                            aria-label="Next image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Indicators */}
                {images.length > 1 && !isZoomed && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'w-8 bg-teal-400'
                                        : 'w-2 bg-white/50 hover:bg-white/70'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Image Counter */}
                {images.length > 1 && !isZoomed && (
                    <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Zoomed View Modal */}
            {isZoomed && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={handleZoomClose}
                >
                    <button
                        onClick={handleZoomClose}
                        className="absolute top-4 right-4 z-50 w-12 h-12 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300"
                        aria-label="Close zoom"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="absolute top-4 left-4 z-50 text-white text-sm bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                        <div>استخدم عجلة الماوس للتصغير/التكبير</div>
                        <div>ESC للإغلاق • ← → للتنقل بين الصور</div>
                    </div>
                    
                    {/* Navigation buttons in zoom mode */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
                                    setScale(1.5);
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300"
                                aria-label="Previous image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex((prev) => (prev + 1) % images.length);
                                    setScale(1.5);
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-all duration-300"
                                aria-label="Next image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                    
                    <img
                        src={images[currentIndex]}
                        alt={`${projectTitle} - Zoomed`}
                        className="max-w-full max-h-full object-contain cursor-zoom-out transition-opacity duration-300"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={handleWheel}
                        style={{
                            transform: `scale(${scale})`,
                            transformOrigin: 'center',
                            transition: 'transform 0.1s ease-out',
                        }}
                        draggable={false}
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                        {currentIndex + 1} / {images.length} • Scale: {Math.round(scale * 100)}%
                    </div>
                </div>
            )}

            {/* CSS for 3D perspective */}
            <style>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </>
    );
};
