export const convertBody = (body) => {
  let result;
  console.log(body);

  if (Object.prototype.hasOwnProperty.call(body, "message")) {
    console.log(body);
    result = {
      code: successCode,
      text: body.message.result.translatedText,
      source: body.message.result.srcLangType,
    };
  } else {
    result = {
      code: body.errorCode,
      text: body.errorMessage,
      source: "",
    };
  }
  return result;
};
