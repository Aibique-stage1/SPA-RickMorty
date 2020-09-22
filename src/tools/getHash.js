const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
//Logic of getHash --> //['', '1', ''] // #/1/ Hay que parsear

export default getHash;