require("minitest/autorun")
require("minitest/rg")
require_relative("../card.rb")
require_relative("../testing_task_2.rb")

class TestCardGame < MiniTest::Test

  def setup()
    @card1 = Card.new("heart", 2)
    @card2 = Card.new("spade", 7)
    @card3 = Card.new("club", 9)

    @cardgame1 = CardGame.new([@card1, @card2, @card3])
  end

  def test_card_suit()
    assert_equal("heart", @card1.suit)
  end

  def test_card_value()
    assert_equal(2, @card1.value)
  end

  def test_check_for_ace()
    card = @cardgame1.check_for_ace(@card1)
    assert_equal(false, @cardgame1.check_for_ace(@card1))
  end

  def test_highest_card()
    assert_equal(@card3, @cardgame1.highest_card(@card3, @card2))
  end

  def test_cards_total()
    cards = @cardgame1
    assert_equal(18, )
  end

end
