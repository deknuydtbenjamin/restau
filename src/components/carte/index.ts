export type MenuType = {
    id: number;
    name: string;
    price: number;
    allergene ?:string
}

// export type AllergeneType ={
//     id:number;
//     content: string;
// }

export const menu: MenuType[] = [
    {
		id: 1,
        name: "welsh",
        price: 14,
        allergene:"Contient : gluten, lait, œuf, moutarde, sulfites"		
	},
     {
		id: 2,
        name: "Steak",
        price: 15		
	},
    {
		id: 2,
        name: "Steak tartare",
        price: 16		
	},
    {
		id: 2,
        name: "filet de boeuf",
        price: 19		
	},
]
