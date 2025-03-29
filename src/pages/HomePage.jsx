import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { getRandomColor } from "../lib/utils";

const APP_ID = "2f26d578";
const APP_KEY = "5d5f2265ddc5695214f78d350a248e67";
 
const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	const fetchRecipes = async (searchQuery) => {
		setRecipes([]);
		try {
			const res = await fetch(
				`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
			);
			const data = await res.json();
			setRecipes(data.hits);
			console.log(data.hits);
		} 
		catch (error) {
			console.log(`Error: ${searchQuery} recipe not found`);
		}
	};

	useEffect(() => {
		fetchRecipes("chicken");
	}, []);

	function handleSearch(){
		const val = document.getElementById("find").value;
		if (val === "") {
			fetchRecipes("ice cream");
		} else {
			fetchRecipes(val);
		}
	}

	return (
		<div className='bg-[#faf9fb] p-10 flex-1'>
			<div className='max-w-screen-lg mx-auto'>
				<div>
					<label className='input shadow-md flex items-center gap-2'>
						<Search size={"24"} />
						<input
							id="find"
							type='text'
							className='text-sm md:text-md grow'
							placeholder='What do you want to cook today?'
						/>
						<button type="button" class="px-3 py-1 font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
							onClick={handleSearch}>
							Search
						</button>
					</label>
				</div>


				<h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipes</h1>
				<p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular choices</p>

				<div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{
					recipes.map(({ recipe }, index) => (
						<RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
					))
				}
				</div>
			</div>
		</div>
	);
};
export default HomePage;