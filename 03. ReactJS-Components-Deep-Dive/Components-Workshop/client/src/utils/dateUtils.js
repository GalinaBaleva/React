export const formatData = (dataString) => {
    const date = new Date(dataString);

    const dataOptions = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedData = date.toLocaleDateString('eu-US', dataOptions);

    return formattedData;
}