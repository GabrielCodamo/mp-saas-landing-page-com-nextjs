import Image from "next/image";
import logo from "./assets/logo.svg";
import woman from "./assets/woman.svg"


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, MenuIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <main>
      <section className="container mx-auto text-center pb-20 px-2 md:px-0">
        <nav className=" justify-between items-center py-4 flex">
          <Image src={logo} alt="Logo LivroSaaS"></Image>
          <DropdownMenu>
            <DropdownMenuTrigger><MenuIcon size={24} className="md:hidden cursor-pointer" /></DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Funcionamento</DropdownMenuItem>
              <DropdownMenuItem>Preço</DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant={"bg-white"}>Login</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className=" hidden md:flex gap-1 items-center">
            <Button variant={"link"}>Funcionamento</Button>
            <Button variant={"link"}>Preço</Button>
            <Button variant={"bg-white"}>Login</Button>
          </div>
        </nav>
        <h1 className="md:text-6xl font-bold md:mt-16 mt-8 text-2xl">Simplifique seus estudos</h1>
        <p className="mt-4 text-sm md:text-xl text-gray-500 max-w-3xl mx-auto">Deixe que nós fazermos a curadoria para você.
          Assine nossa plataforma e receba todos os meses um ebook novo de programação.
        </p>
        <form action="#" className="mt-10 md:mt-16">
          <div className="flex justify-center gap-2">
            <Input className="bg-gray-50 max-w-sm border border-gray-300"
              placeholder="Coloque seu email" type="text" />
            <Button>Assine Agora</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Começe sua assinatura agora mesmo.
            Cancele quando quiser.
          </p>
        </form>
      </section>
      <section className="bg-white md:py-16 py-8">
        <div className="container mx-auto">
          <h2 className="font-bold md:text-4xl text-2xl  text-center">Como funciona?</h2>
          <div className="flex lg:mx-40 flex-col xl:mx-30 md:flex-row justify-between mx-30 items-center">
            <Image src={woman} alt="Mulher carregando caixas" className="max-w-xs"></Image>
            <ul className="text-gray-400 md:text-2xl text-lg   space-y-4 md:space-y-6 flex-shrink-0">
              <li className="flex gap-4 justify-between items-center">Acesso a 1 ebook por mês <Check className="text-green-600" /></li>
              <li className="flex gap-4 justify-between items-center">Curadoria especial <Check className="text-green-600" /></li>
              <li className="flex gap-4 justify-between items-center">Cancele quando quiser <Check className="text-green-600" /></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="text-center md:py-16 py-8 px-2 container mx-auto">
        <h2 className="md:text-6xl text-2xl font-bold md:mt-16 ">Preço Simples e Transparente</h2>
        <p className="mt-6 md:text-xl text-sm text-gray-500 max-w-3xl mx-auto">Pra que inúmeros quando nós sabemos exatamente o que é melhor para você?
          Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia.
        </p>
        <Card className="w-[350px] mx-auto md:mt-20 mt-10 text-left">
          <CardHeader>
            <CardTitle>Plano Pro Premium VIP</CardTitle>
            <CardDescription>Tudo que você precisa para seus estudos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold mb-8 mt-4 ">R$ 29<span className="font-normal text-muted-foreground text-lg">/mês</span></p>
            <ul>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="text-green-600 w-4" />
                Acesso a 1 ebook por mês </li>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="text-green-600 w-4" />Curadoria especial</li>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="text-green-600 w-4" />Acesso Ilimitado</li>
              <li className="flex gap-2 text-muted-foreground">
                <Check className="text-green-600 w-4" />Cancele quando quiser</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Assine Agora</Button>
          </CardFooter>
        </Card>
      </section>
      <section className="bg-white text-center md:py-16 py-10">
        <h2 className="md:text-6xl text-2xl font-bold md:mt-16 ">Pronto Para Mudar Sua Vida?</h2>
        <p className="mt-4 md:text-xl text-sm text-gray-500 max-w-3xl mx-auto">Faça como milhares de outras pessoas.
          Assine nosso produto e tenha
          garantido seus estudos{''}
        </p>
        <Button className="mt-14 w-96">Assine Agora</Button>
        <p className="text-xs text-muted-foreground mt-2">Comece sua assinatura agora mesmo.
          Cancele quando quiser.
        </p>
        <footer className="mt-16 border-t border-gray-300 pt-10">
          <Image src={logo} alt="Logo do SaaS" className="mx-auto" />
          <p className="text-muted-foreground">&copy; 2024 LivroSaaS. Todos os direitos reservados.</p>
        </footer>
      </section>
    </main>
  );
}
