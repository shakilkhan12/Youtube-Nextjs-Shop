import { Navbar, Button, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";

export default function Nav() {
  const { isDark } = useTheme();

  return (
    <>
      <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            <Link href="/"> HOME SHOP</Link>
          </Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat href="#">
              Cart
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
