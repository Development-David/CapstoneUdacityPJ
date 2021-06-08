const getPixa = async (destination) => {
    const req = {
        BASE_URL: `https://pixabay.com/api/?q=${destination}&image_type=photo&category=travel&safesearch=true&order=popular&orientation=horizontal`,
    };

    const response = await fetch('/pixa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });

    const pixabayData = await response.json();
    return pixabayData;
};

export { getPixa };
