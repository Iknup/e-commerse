const selectBox = (
  array: any[],
  defaultStyle: string,
  activeStyle: string,
  current: number,
  fx: any
) => {
  const content = array.map((item, i) => {
    let style = defaultStyle;
    if (current === i) {
      style = defaultStyle + activeStyle;
    }
    return <button>
      
    </button>
  });
};
