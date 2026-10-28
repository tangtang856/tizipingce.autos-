import fs from 'fs';
import path from 'path';

const nativeJsPath = path.resolve(process.cwd(), 'node_modules/rollup/dist/native.js');

if (fs.existsSync(nativeJsPath)) {
  let content = fs.readFileSync(nativeJsPath, 'utf-8');
  if (!content.includes("@rollup/wasm-node/dist/native.js")) {
    content = content.replace(
      "if (error instanceof Error && error.code === 'ERR_DLOPEN_FAILED') {\n\t\t\tthrow error;\n\t\t}",
      "if (error instanceof Error && error.code === 'ERR_DLOPEN_FAILED') {\n\t\t\ttry { return require('@rollup/wasm-node/dist/native.js'); } catch (_) { throw error; }\n\t\t}"
    );
    fs.writeFileSync(nativeJsPath, content, 'utf-8');
    console.log('[patch-rollup] Successfully applied wasm fallback for Application Control policies.');
  }
}
