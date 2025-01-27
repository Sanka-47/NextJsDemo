import "./globals.css"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Menu, LayoutDashboard, ListTodo, Package, Users, Calendar } from "lucide-react"
import Link from 'next/link'
import { Toaster } from "sonner"

const NavLink = ({ href, icon: Icon, children }) => (
  <Link href={href}>
    <Button variant="ghost" className="w-full justify-start gap-2">
      <Icon className="h-4 w-4" />
      {children}
    </Button>
  </Link>
)

const NavLinks = () => (
  <div className="space-y-1">
    <NavLink href="/" icon={LayoutDashboard}>Dashboard</NavLink>
    <NavLink href="/tasks" icon={ListTodo}>View Tasks</NavLink>
    <NavLink href="/inventory" icon={Package}>Inventory</NavLink>
    <NavLink href="/employee" icon={Users}>Employees</NavLink>
    <NavLink href="/attendance" icon={Calendar}>Attendance</NavLink>
  </div>
)

const SidebarContent = () => (
  <>
    <div className="flex items-center px-2">
      <h1 className="text-xl font-semibold">Printing Center</h1>
    </div>
    <Separator className="my-4" />
    <NavLinks />
  </>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <nav className="hidden lg:block w-64 border-r bg-background p-4">
            <SidebarContent />
          </nav>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="fixed top-4 left-4">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-4">
                <SidebarContent />
              </SheetContent>
            </Sheet>
          </div>

          <main className="flex-1 p-8 overflow-auto">
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  )
}