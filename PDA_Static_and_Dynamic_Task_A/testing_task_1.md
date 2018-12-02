### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame
# needs an 'initialize' with a card type attribute to hold cards from previous

# should read 'check_for_ace(card)' can't imagine it's a game breaker though.
  def checkforAce(card)
    if card.value = 1
# '==' not '='
      return true
    else
      return false
    end
  end


#'def' not 'dif', should also have a ',' between 'card1' and 'card2'
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
# should be 'card1' no 'name' required
  else
    card2
  end
# additional 'end' not required
end
end
# ends need indented

# whole method should be indented
def self.cards_total(cards)
  total
# total variable has no value
  for card in cards
    total += card.value
    return "You have a total of" + total
# think 'total' should be a string in #{}
  end
end

# no 'end' to class

```
