const handleError = (errorMessage) => {
    let err = new Error(errorMessage);
    err.status = 400;
    return err
}
export default {
    handleError,
}