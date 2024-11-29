import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://nutricity.com.au/cdn/shop/files/supps_by_nutricity_1600x.png')", // Add the background image here
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            
          </Heading>
          <Heading
            level="h3"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            
          </Heading>
        </span>
        <a href="/store" target="_blank">
          <Button variant="secondary">
            Shop the Latest Trends!
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
