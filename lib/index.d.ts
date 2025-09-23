import type { Linter } from 'eslint';

declare const _default: {
  configs: {
    recommended: Linter.Config;
    common: Linter.Config;
    import: Linter.Config;
    prettier: Linter.Config;
    react: Linter.Config;
    jsxA11y: Linter.Config;
    typescript: Linter.Config;
  };

  rules: {
    recommended: Linter.RuleEntry;
    common: Linter.RuleEntry;
    import: Linter.RuleEntry;
    react: Linter.RuleEntry;
    prettier: Linter.RuleEntry;
    typescript: Linter.RuleEntry;
    destructuring: Linter.RuleEntry;
    jsxA11y: Linter.RuleEntry;
  };
}

export = _default;
