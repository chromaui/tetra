import {
  color,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  breakpoint,
  spacing,
} from './_tokens/tokens';

const prefix = 'tetra';

function jsonToCssVariables(tokenType: string, json: Record<string, any>) {
  const keys = Object.keys(json);

  const vars = keys.map((key) => {
    const varValue = json[key];
    const varName = `--${prefix}-${tokenType}-${key}`;

    return `  ${varName}: ${varValue};`;
  }, {});

  return vars.join('\n');
}

function generateCSSVariables() {
  const cssVariables = `:root {
${jsonToCssVariables('color', color)}

${jsonToCssVariables('fontFamily', fontFamily)}

${jsonToCssVariables('fontWeight', fontWeight)}

${jsonToCssVariables('fontSize', fontSize)}

${jsonToCssVariables('lineHeight', lineHeight)}

${jsonToCssVariables('breakpoint', breakpoint)}

${jsonToCssVariables('spacing', spacing)}
}`;

  return cssVariables;
}

export const cssVariables = generateCSSVariables();
