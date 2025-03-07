"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/userContext";

const Home = () =>{
  const user = useUser()
  console.log(user);
  return (
    <div className="">
      <Button>Click me </Button>
    </div>
  );
}


export default Home;