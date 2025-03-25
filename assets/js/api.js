async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/LucasFS096/Portifolio/refs/heads/main/data/profile.json'
    const fetching = await fetch(url)

    return await fetching.json()
}