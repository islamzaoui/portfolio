import antfu from '@antfu/eslint-config';
import prettier from 'eslint-config-prettier';

export default antfu(
	{
		type: 'app',
		svelte: true,
		stylistic: false,
		ignores: ['*.md'],
		rules: {
			'no-console': ['warn'],
			'antfu/no-top-level-await': ['off'],
			'node/no-process-env': ['error'],
			'perfectionist/sort-imports': [
				'error',
				{
					newlinesBetween: 1,
				},
			],
			'unicorn/filename-case': [
				'error',
				{
					case: 'kebabCase',
					ignore: ['README.md'],
				},
			],
		},
	},
	prettier
);
