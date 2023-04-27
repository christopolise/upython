import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    'myExtensionSidebar',
    'My Extension',
    vscode.ViewColumn.Two,
    {}
  );

  const disposable = vscode.commands.registerCommand(
    'upython.showSidebar',
    () => {
      panel.reveal(vscode.ViewColumn.Two);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}