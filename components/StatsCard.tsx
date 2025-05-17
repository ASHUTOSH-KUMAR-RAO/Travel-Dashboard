import { useEffect, useState } from "react";
import { calculateTrendPercentage, cn } from "~/lib/utils";
import { ArrowDownRight, ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";

type StatsCardProps = {
  headerTitle: string;
  total: number;
  lastMonthCount: number;
  currentMonthCount: number;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
};

const StatsCard = ({
  headerTitle,
  total,
  lastMonthCount,
  currentMonthCount,
  icon,
  bgColor = "bg-white",
  textColor = "text-gray-900",
}: StatsCardProps) => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  // Calculate trend data
  const { trend, percentage } = calculateTrendPercentage(
    currentMonthCount,
    lastMonthCount
  );

  const isDecrement = trend === "decrement";
  
  // Animation effect when component mounts
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <article 
      className={cn(
        "stats-card rounded-xl p-6 shadow-sm transition-all duration-300",
        bgColor,
        textColor,
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium">{headerTitle}</h3>
        {icon && (
          <div className={cn(
            "rounded-lg p-2",
            isDecrement ? "bg-red-100" : "bg-green-100"
          )}>
            {icon}
          </div>
        )}
      </div>
      
      <div className="content flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{total}</h2>
          <div className="flex items-center gap-2">
            <div className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-full",
              isDecrement ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            )}>
              {isDecrement ? 
                <ArrowDownRight className="size-4" /> : 
                <ArrowUpRight className="size-4" />
              }
              <span className="text-sm font-medium">
                {Math.round(percentage)}%
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium">vs last month</p>
          </div>
        </div>
        
        <div className="chart-container h-16 w-24 flex items-end justify-center">
          {isDecrement ? 
            <TrendingDown 
              className="text-red-500 w-full h-full" 
              strokeWidth={1.5}
            /> : 
            <TrendingUp 
              className="text-green-500 w-full h-full" 
              strokeWidth={1.5}
            />
          }
        </div>
      </div>
    </article>
  );
};

export default StatsCard;