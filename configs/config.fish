if status is-interactive
    # Commands to run in interactive sessions can go here
    batman --export-env | source
    neofetch
    starship init fish | source
    alias  su="sudo-rs"
    alias  bb="bash"
    alias  zz="zsh"
    # alias  bat="batman"
end