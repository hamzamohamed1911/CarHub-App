import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" |"submit"
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}
export interface searchManuFacturerProps{
    manuFacturer:string;
    setManuFacturer:(manuFacturer:string)=>void;
}
export interface carProps{
city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}
export interface filterProps{
    manuFacturer:string;
    year:number;
    fuel:string;
    limit:number;
    model:string;
}
export interface HomeProps {
    searchParams: filterProps;
  }
  
  export interface OptionProps {
    title:string;
    value:string;
  }
  export interface CustomFilterProps <T> {
    
    options: OptionProps[];
    setFilter: (selected: T) => void;
  }
  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
  }
  
  export interface SearchManuFacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
  }
  export interface SearchBarProps {
    setManuFacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
  }