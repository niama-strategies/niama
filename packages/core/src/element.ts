/*export const getAlignItems = (el: Element): string => (el ? getComputedStyle(el).alignItems : 'normal');
export const getFontSize = (el: Element): number => (el ? toPx(getComputedStyle(el).fontSize) : 0);
export const getJustifyContent = (el: Element): string => (el ? getComputedStyle(el).justifyContent : 'normal');

export const getLineHeight = (el: Element): number => {
  if (!el) return 0;
  const lineHeight = toPx(getComputedStyle(el).lineHeight);
  return Number.isNaN(lineHeight) ? getFontSize(el) : lineHeight;
};

export const getRect = (el: Maybe<HTMLElement | Range>, includeComplementaryHeights = false): ElRect => {
  if (!el) return {...fill(0)('bottom', 'height', 'left', 'right', 'top', 'width'), dynamicHeight: true, maxHeight: INF};
  const {bottom, height, left, right, top, width} = el.getBoundingClientRect();
  const dynamicHeight = includeComplementaryHeights && el instanceof HTMLElement ? hasDynamicHeight(el) : true;
  const maxHeight = includeComplementaryHeights && el instanceof HTMLElement && el.parentElement ? pureMaxH(el.parentElement) : INF;
  return {bottom, dynamicHeight, left, maxHeight, right, top, height: Math.round(height), width: Math.round(width)};
};

export const getStyle = ({style}: HTMLElement): string => {
  let out = '';
  for (const prop of style) if (Object.prototype.hasOwnProperty.call(style, prop)) out += `${prop}:${style[prop]};`;
  return out;
};

export const hasDynamicHeight = (el: HTMLElement): boolean => {
  const prevH = el.parentElement?.getBoundingClientRect().height; //FIXME: Performance
  const div = document.createElement('div');
  div.style.height = '1px'; //FIXME: Performance
  el.parentElement?.append(div); //FIXME: Performance
  const nextH = el.parentElement?.getBoundingClientRect().height; //FIXME: Performance
  el.parentElement?.removeChild(div); //FIXME: Performance
  return prevH !== nextH;
};

export const hasEllipsisOnSameLine = (el: HTMLElement): boolean => {
  const prevH = el.getBoundingClientRect().height; //FIXME: Performance
  const span = document.createElement('span');
  span.innerHTML = '…';
  el.append(span);
  const nextH = el.getBoundingClientRect().height; //FIXME: Performance
  span.remove();
  return prevH === nextH;
};

export const isRect = (data: any): data is ElRect => typeof data.maxHeight === 'number';*/

//export const nodeHasInlineParent = (node: ChildNode): boolean => !!node.parentElement && nodeIsInline(node.parentElement); //FIXME: Performance

export const nodeHasTextDescendant = ({childNodes}: ChildNode): boolean =>
  [...childNodes].some((c) => nodeIsText(c) || nodeHasTextDescendant(c));

export const nodeIsBr = (node: ChildNode): node is HTMLBRElement => node.nodeName === 'BR';
export const nodeIsElement = (node: ChildNode): node is HTMLElement => node.nodeType === 1;
//export const nodeIsInline = (node: ChildNode): boolean => nodeIsElement(node) && getComputedStyle(node).display.includes('inline'); //FIXME: Performance
export const nodeIsText = (node: ChildNode): node is Text => node.nodeType === 3;

/*export const pureH = (el: Element, exact = false): number => {
  if (!el) return 0;
  const {borderBottomWidth, borderTopWidth, height, paddingBottom, paddingTop} = getComputedStyle(el);
  return (exact ? toPx(height) - toPx(borderBottomWidth) - toPx(borderTopWidth) : el.clientHeight) - toPx(paddingTop) - toPx(paddingBottom);
};

export const pureMaxH = (el: Element): number => {
  if (!el) return Number.POSITIVE_INFINITY;
  const {maxHeight, paddingBottom, paddingTop} = getComputedStyle(el);
  const maxH = toPx(maxHeight);
  return Number.isNaN(maxH) ? Number.POSITIVE_INFINITY : maxH - toPx(paddingTop) - toPx(paddingBottom);
};

export const pureAvailableH = (el: Element): number => {
  const maxH = pureMaxH(el);
  return maxH === Number.POSITIVE_INFINITY ? pureH(el) : maxH;
};

export const pureScrollH = (el: Element): number => {
  if (!el) return 0;
  const {paddingBottom, paddingTop} = getComputedStyle(el);
  return el.scrollHeight - toPx(paddingTop) - toPx(paddingBottom);
};

export const pureW = (el: Element, exact = false): number => {
  if (!el) return 0;
  const {borderLeftWidth, borderRightWidth, paddingLeft, paddingRight, width} = getComputedStyle(el);
  return (exact ? toPx(width) - toPx(borderLeftWidth) - toPx(borderRightWidth) : el.clientWidth) - toPx(paddingLeft) - toPx(paddingRight);
};

export const pureScrollW = (el: Element): number => {
  if (!el) return 0;
  const {paddingLeft, paddingRight} = getComputedStyle(el);
  return el.scrollWidth - toPx(paddingLeft) - toPx(paddingRight);
};*/

export const toPx = (size: string): number => Number.parseFloat(size);

/*export const totalH = (el: Element, exact = false): number => {
  if (!el) return 0;
  const {borderBottomWidth, borderTopWidth, height, marginBottom, marginTop} = getComputedStyle(el);
  return (exact ? toPx(height) : el.clientHeight + toPx(borderBottomWidth) + toPx(borderTopWidth)) + toPx(marginBottom) + toPx(marginTop);
};

export const totalW = (el: Element, exact = false): number => {
  if (!el) return 0;
  const {borderLeftWidth, borderRightWidth, marginLeft, marginRight, width} = getComputedStyle(el);
  return (exact ? toPx(width) : el.clientWidth + toPx(borderLeftWidth) + toPx(borderRightWidth)) + toPx(marginLeft) + toPx(marginRight);
};*/
