import { ChevronDown } from "lucide-react";

import { NavigationMenu } from "@base-ui-components/react/navigation-menu";

function Navigation() {
  return (
    <NavigationMenu.Root className="hidden min-w-max grow justify-end text-primary-950 lg:flex">
      <NavigationMenu.List className="relative flex items-center space-x-4">
        <NavigationMenu.Item className="cursor-pointer rounded-md p-2 hover:bg-primary-50">
          For Employers
        </NavigationMenu.Item>

        <NavigationMenu.Item className="cursor-pointer rounded-md p-2 hover:bg-primary-50">
          <span>For Scientists</span>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="cursor-pointer rounded-md p-2 hover:bg-primary-50">
          About
        </NavigationMenu.Item>

        <NavigationMenu.Item className="cursor-pointer rounded-md p-2 hover:bg-primary-50">
          Contact
        </NavigationMenu.Item>

        <NavigationMenu.Item className="cursor-pointer rounded-md p-2 hover:bg-primary-50">
          <NavigationMenu.Trigger className="flex space-x-2">
            Resources
            <NavigationMenu.Icon className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
              <ChevronDown />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="h-full xs:w-max xs:w-max xs:min-w-[400px] p-6 transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:data-[activation-direction=left]:translate-x-[50%] data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%] data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%] data-[starting-style]:data-[activation-direction=right]:translate-x-[50%] data-[ending-style]:opacity-0 data-[starting-style]:opacity-0">
            <ul className="flex w-[200px] flex-col gap-2">
              <li className="cursor-pointer hover:text-primary-600">
                Employer Blog
              </li>
              <li className="cursor-pointer hover:text-primary-600">
                Job Seeker Blog
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          className="box-border h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5"
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
          collisionAvoidance={{ side: "none" }}
          side="bottom"
          sideOffset={20}
        >
          <NavigationMenu.Popup className="data-[ending-style]:easing-[ease] relative h-[var(--popup-height)] w-[var(--popup-width)] xs:w-[var(--popup-width)] origin-[var(--transform-origin)] rounded-lg bg-[canvas] text-gray-900 shadow-gray-200 shadow-lg outline outline-1 outline-gray-200 transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-90 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 data-[ending-style]:duration-150">
            <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}

export { Navigation };
