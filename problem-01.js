const describeValue = (value) => {
  return `${typeof value} | ${Boolean(value)? "truthy" : "falsy"}`;
};