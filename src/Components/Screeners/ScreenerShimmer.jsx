function ScreenerShimmer({ idx }) {
    return (
        <div className="w-full flex flex-col gap-4 mt-4 z-0">
            <div className="shimmer-wrapper overflow-hidden">
                <div className={`py-8 bg-secondary-btn-hover dark:bg-bg-dark-hover mx-8 relative overflow-hidden rounded-lg shimmer shimmer-${idx}`} />
            </div>
        </div>
    );
}

export default ScreenerShimmer;
