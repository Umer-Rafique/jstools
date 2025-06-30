interface AdBannerProps {
  position: "top" | "bottom" | "sidebar" | "inline"
  className?: string
}

export function AdBanner({ position, className = "" }: AdBannerProps) {
  const getAdSize = () => {
    switch (position) {
      case "top":
      case "bottom":
        return "h-24 md:h-32"
      case "sidebar":
        return "h-64 w-full max-w-xs"
      case "inline":
        return "h-20 md:h-24"
      default:
        return "h-24"
    }
  }

  return (
    <div>
      
    </div>
    // <div
    //   className={`bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center ${getAdSize()} ${className}`}
    // >
    //   <div className="text-center text-gray-500">
    //     <p className="text-sm font-medium">Advertisement</p>
    //     <p className="text-xs">Google AdSense Placeholder</p>
    //   </div>
    // </div>
  )
}
