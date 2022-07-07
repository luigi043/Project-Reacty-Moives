const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '04c35731a5ee918f014970082a0088b1',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;