class AddUserNoteToDiagnoses < ActiveRecord::Migration[5.2]
  def change
    add_column :diagnoses, :user_note, :string
  end
end
