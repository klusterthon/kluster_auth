type StepProgressProps = {
  progress: number;
  maxValue: number;
}

/**
 * 
 * Todo
 */
export default function StepProgress({ maxValue, progress }: StepProgressProps) {
  return (
    <div className="flex space-x-4">
      {
        Array.from<number>({ length: 3 }).fill(0).map((key, index) => (
          <div
            key={index}
            className="h-1 flex flex-1 rounded-xl bg-white/30">
            {
              index <= progress - 1 && <div
                className="h-full w-full animate-[width] animate-ease rounded-xl bg-white" />
            }
          </div>
        ))
      }
    </div>
  )
}
