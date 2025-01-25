import { Button } from "@/components/ui/button"

export function AppSidebar() {
  return (
    <div className="pb-12 w-64">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Main Branch</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}