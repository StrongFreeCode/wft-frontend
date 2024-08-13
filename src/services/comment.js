import supabase from "./supabase.js"

async function getOpinons() {
    const { data, error } = await supabase.from("Opinion").select()

    if (error) throw error
    return data
}


export { getOpinons }
