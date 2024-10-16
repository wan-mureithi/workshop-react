import { cn } from "@model/utils"

function ComponentExampleDeleteThis() {
  const currentYear = new Date().getFullYear()

  const a = 181

  return (
    <div
      className={cn(
        "justify-between min-h-screen flex flex-col items-center  text-center text-white",
        "bg-dalbergPurple"
      )}
    >
      <div className="flex-grow flex items-center justify-center">
        <p>This is a test component. Please delete it</p>
      </div>
      <footer className="pb-4">&copy; {currentYear}</footer>
    </div>
  )
}

export default ComponentExampleDeleteThis
