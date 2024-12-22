import prettierConfig from '@vue/eslint-config-prettier';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
	{
		ignores: ['eslint.config.mjs']
	},
	...vueTsEslintConfig({ extends: ['recommendedTypeChecked', 'stylisticTypeChecked'] }),
	{
		languageOptions: {
			parserOptions: {
				parser: '@typescript-eslint/parser',
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	prettierConfig,
	{
		rules: {
			complexity: ['error', 12],
			'prefer-const': 'error',
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'always'
					}
				}
			],
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
			'vue/no-multiple-template-root': 'off'
		}
	}
];
