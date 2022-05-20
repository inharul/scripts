set number
set backspace=indent,eol,start
set cursorline
syntax on
set clipboard=unnamed
set noerrorbells
set noswapfile
set nobackup
set tabstop=3 softtabstop=3
set shiftwidth=3
set expandtab
set smartindent
set nowrap
set undodir=~/.vim/undodir
set undofile
set incsearch
set guifont=Consolas:h11
set guioptions-=m
set guioptions-=T
set guioptions=r
call plug#begin('~/.vim/plugged')
Plug 'tomasiser/vim-code-dark'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'jremmen/vim-ripgrep'
Plug 'ryanoasis/vim-devicons'
Plug 'tpope/vim-fugitive'
Plug 'leafgarland/typescript-vim'
Plug 'vim-utils/vim-man'
Plug 'jiangmiao/auto-pairs'
Plug 'mbbill/undotree'
Plug 'preservim/nerdtree'
call plug#end()
nnoremap <C-t> :NERDTreeToggle<CR>
au GUIEnter * simalt ~x
colorscheme codedark
set background=dark
