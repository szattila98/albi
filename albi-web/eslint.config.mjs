// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettierConfig from '@vue/eslint-config-prettier';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default withNuxt(
	// @ts-expect-error - something is fishy with the withNuxt type definition, so the error is ignored
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
			'@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }]
		}
	}
);
