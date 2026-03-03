import { ImageEditor } from './image-editor';
import { ImageHistory } from './image-history';

const editor = new ImageEditor();
const history = new ImageHistory(editor);

// Salva estado 'Normal'
history.backup();

// 1. Estado Inicial
editor.showStatus();

// 2. Primeira alteração e Backup
editor.applyFilter('Preto e Branco');
history.backup(); // Salva estado com P&B

// 3. Segunda alteração e Backup
editor.setResolution('1080x1080 (Instagram)');
editor.applyFilter('Vintage');
history.backup(); // Salva estado Vintage/1080p

// 4. Terceira alteração (sem salvar ainda)
editor.applyFilter('Sepia');
editor.showStatus();

// 5. Desfazendo
console.log('\n--- Botão de Desfazer Clicado ---');
history.undo(); // Volta para Vintage
history.undo(); // Volta para P&B
history.undo(); // Volta para Normal
editor.showStatus();
