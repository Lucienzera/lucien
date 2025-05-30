#!/bin/bash
# Generate a random emoji from a selection
emojis=("🎯" "🚀" "⭐" "🎉" "🔥" "💫" "🌟" "🎪" "🎭" "🎨" "🎵" "🎲" "🎮" "⚡" "🌈")
echo ${emojis[$RANDOM % ${#emojis[@]}]}
