import Link from "next/link";
import { FC } from "react";

interface MenuItemsProps {
  Title: string;
  Address: string;
  Icon: FC;
}

const MenuItems = ({ Title, Address, Icon }: MenuItemsProps) => {
  return (
    <div>
      <Link href={Address}>
        <div className="sm:hidden text-2xl">
          <Icon />
        </div>
        <p className="hidden sm:inline hover:text-amber-500 transition-colors">{Title}</p>
      </Link>
    </div>
  );
};

export default MenuItems;