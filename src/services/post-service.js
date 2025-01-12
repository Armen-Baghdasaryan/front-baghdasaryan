export const getPosts = async () => {
  try {
    const resp = await fetch("https://cloud.codesupply.co/endpoint/react/data.json");

    if (!resp.ok) {
      throw new Error(`Error HTTP: ${resp.status}`);
    }

    const data = await resp.json();

    const transformedData = data.map(((item, idx) => {
      return {...item, id: `post_item_${idx + 1}`, fullDescription: item.text + `Text${idx+1} It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}
    }))

    return transformedData;
  } catch (error) {
    console.error("Error Message: ", error);
    return null;
  }
};
