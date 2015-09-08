#!/bin/bash
SESSION=$USER

cd $GOPATH/src/github.com/cjgk/quiz

tmux -2 new-session -d -s $SESSION

tmux new-window -t $SESSION:1 -n "Code"
tmux send-keys "vim" C-m

tmux new-window -t $SESSION:2 -n "Watchers"
tmux send-keys "npm run serve" C-m

tmux select-window -t $SESSION:1

tmux -2 attach-session -t $SESSION
