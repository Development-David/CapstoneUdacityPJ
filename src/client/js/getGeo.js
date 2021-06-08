const getGeo = async (destination) => {
    const req = {
        BASE_URL: `http://api.geonames.org/searchJSON?formatted=true&name=${destination}`,
    };

    const response = await fetch('/geo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });

    const geonameData = await response.json();
    console.log(geonameData);
    return geonameData;
};

export { getGeo };