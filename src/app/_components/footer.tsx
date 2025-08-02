import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            dogprod.wmhosting.net
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Button
              asChild
              className="mx-3 mb-6 lg:mb-0"
              variant="default"
              size="lg"
            >
              <a
                href="#"
              >
                Contact
              </a>
            </Button>
            <Button
              asChild
              variant="link"
              className="mx-3 font-bold"
            >
              <a
                href="#"
              >
                About
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
