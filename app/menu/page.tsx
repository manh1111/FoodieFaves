'use client'

import { brands, foods } from "@public/assets/images";
import Image from "next/image";
import { useState } from "react";

interface Food{
    name: string;
    cost: number;
    image: string;
    desc: string;
    has3D: boolean
}

const Menu: React.FC = () => { 
    const [selectedButton, setSelectedButton] = useState<number>(0);
    const handleButtonClick = (index: number) => {
        setSelectedButton(index);
    };

    const btns: { name: string }[] = [
        {
            name: "All"
        },{
            name: "Breakfast"
        },{
            name: "Main Dishes"
        },{
            name: "Drinks"
        },{
            name: "Desserts"
        },
    ] 

    const infoFoods: Food[] = [
        {
            name: "Fried Eggs",
            cost: 9.99,
            desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
            image: foods.FriedEggs,
            has3D: false
        },{
            name: "Hawaiian Pizza",
            cost: 15.99,
            desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
            image: foods.HawaiianPizza,
            has3D: false
        },{
            name: "Martinez Coktail",
            cost: 7.25,
            desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
            image: foods.MartinezCoktail,
            has3D: false

        },{
            name: "Butterscotch Cake",
            cost: 20.99,
            desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
            image: foods.ButterscotchCake,
            has3D: false
        },{
            name: "Mint Lemnonade",
            cost: 5.89,
            desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
            image: foods.MintLemnonade,
            has3D: false
        },{
            name: "Chocolate Icecream",
            cost: 18.5,
            desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
            image: foods.ChocolateIcecream,
            has3D: false
        },{
            name: "Cheese Burger",
            cost: 12.55,
            desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
            image: foods.CheeseBurger,
            has3D: false
        },{
            name: "ClassicWaffles",
            cost: 20.99,
            desc: "Made with eggs, lettuce, salt, oil and other ingredients.",
            image: foods.ClassicWaffles,
            has3D: false
        },
    ]

    const FoodCard: React.FC<{ food: Food }> = ({ food }) => (
    <div className="food-card border-2 w-60 rounded-lg">
      <Image
        className="object-cover"
        alt="food"
        priority={true}
        src={food.image} />
      <div className="text text-center py-5">
        <p className="cost text-[--color-red] font-extrabold">$ {food.cost}</p>
        <p className="name font-semibold py-2">{food.name}</p>
        <p className="desc text-xs">{food.desc}</p>
      </div>
    </div>
    )
    
    return (
        <div className="body flex flex-col">
            <div className="section flex-col">
                <div className="text flex flex-col items-center justify-center ">
                    <p className="font_playfair not_italic font-normal text-2xl md:text-7xl ">Our Menu</p>
                    <p className="text-center font-normal w-2/3 md:py-5">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>

                <div className="button w-3/5 flex flex-row justify-between">
                    {btns.map((btn, index) => (
                            <button key={index}
                                className={`rounded-full border py-1 px-5 text-black transition-all text-center text-sm flex items-center justify-center
                                            ${selectedButton === index ? 'bg-[--color-red] text-white hover:bg-white hover:text-[--color-red]' : 'border-[#DBDFD0] bg-transparent hover:bg-[#DBDFD0] hover:text-white'}`
                                }
                                onClick={() => handleButtonClick(index)}
                            >{btn.name}</button>
                    ))}
                </div>
            </div>

            <div className="section grid grid-rows-2 grid-flow-col gap-2">
                <div className="grid grid-rows-2 grid-flow-col gap-10">
                    {infoFoods.map((food, index) => (
                        <FoodCard key={index} food={food}/>
                    ))}
                </div>
            </div>
            <div className="section flex-row bg-[--color-gray]">
                <div className="text flex justify-center w-1/2">
                    <div  className="w-3/5 p">
                        <p className="header_content pb-3"> You can order through apps</p>
                        <p className="desc text-xs">Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
     
                    </div>               </div>
                <div className="brands w-1/2 grid grid-rows-3 grid-flow-col gap-0">
                    {brands.map((brand, index) => (
                        <div key={index} className="inline-block max-w-[calc(100%-50px)] overflow-hidden">
                            <Image
                                className="w-ful"
                                alt="food"
                                priority={true}
                                src={brand}/> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu