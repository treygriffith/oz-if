
build: components index.js
				@component build --dev

dist: components
				@component build --standalone oz-if --name oz-if --out dist
				@uglifyjs dist/oz-if.js -o dist/oz-if.min.js

components: component.json
				@component install --dev

clean:
				rm -fr build components template.js dist

test: build
				component-test phantom

.PHONY: clean oz-if test
