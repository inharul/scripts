## Vim - quick overview

throw your mouse away because there is no furthur use of it. Now if you are scared then you might want to exit it. Alright so let's see how you can do that because I'm sure you don't trust me. That's fine.

    :q - normal quit if no changes to the file
    :wq - save the file and then quit (Save)
    :q! - don't save the changes just quit (Don't Save)

Now you know how to exit vim, you have nothing to fear about. So let's just go and deep dive into it.

There are about 5 or about some modes in vim. The mode you'll start with will be normal mode. Now use Insert mode to start typing your words or code.

 - Normal Mode ( esc ) - moving around
 - Insert Mode ( i ) - editing
 - Command Mode (:) - using a command
 - Visual Mode ( v ) - selecting text
   
      - v (normal mode)
      - V (line mode)
      - ^V (block mode)
   
  - Replace Mode ( R ) - replacing characters

Generally you'll notice that we can use cursor/arrow keys to move around like how we ususally do but vim has other keys to do that work as well.

    h - Move left ⬅️
    j - Move down ⬇️
    k - Move up ⬆️
    l - Move right ➡️

you can compare them with how you use your W,A,S,D for movement in a game. Now not a history class but the reason why they got added was at that time there were no arrow keys on the keyboards. yeah...

OK look a cool thing and experience the fast editing. You wrote some sentences or some code let's say (write it down if you haven't what are you doing)

    0 - move to the beginning of the line
    $ - move to the end of the line
    G - move to the top of the file
    gg - move to the end of the file
    { - move bakwards a block of code
    } - move after a block of code

> :10 - takes you to the line 10 (10 is variable here you can replace it
> with any number)

    w - move to beginning of next word
    b - move to previous beginning of word
    e - move to end of word

> 0w - takes to the beggining of the line

Enough playing with that now delete it. Oh you using backspace to delete the whole sentence? Look here, go to Normal mode (esc).

    dd - deletes a line
    dw - deltes a word
    10dd - delets 10 liens
    cw - changes a word (puts in insert mode)
    x - delete a character which cursor is on

You can add numbers after it to specify how many lines you want to delete.

    u - undo
    ^R - redo
    yy - copies a line
    p - paste
    ~ - change the case of a letter
    r - replace a letter
    R - go to replace mode
	
and also some for editing ...

    i - for insert (this immediately switches vim to insert mode)
    a - for append (this moves the cursor after the current character and enters insert mode)
    A - insert from the end of the line
    I - insert from the beginning of the line
    o - inserts a new line below the current line and enters insert mode on the new line
    
    . - repeat the last executed command
    
finding and some others...

    f<c> - takes you to the character (c is variable i.e any character)
    %  - to go to specific block parenthesis
    df<c> - deletes upto that character
    * - takes to the instances of the word
    /<chars> - search for words in the documen
    n - goto next occurrence
Intending and centering...
    
    zz -  center your page based on the cursor's position
    >> - indent line
    << - unindent
oh oh macros...

    qw - start recording of macro
    q - stop recording
    @w - use the macro
